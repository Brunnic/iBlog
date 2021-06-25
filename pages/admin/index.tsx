import React, { ChangeEvent } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import styled from "styled-components";
import axios from "axios";
import { TextField, Input, InputLabel } from "@material-ui/core";

import fb from "../../utils/firebase";

const Container = styled.div`
  width: 66%;
  background-color: whitesmoke;
  color: black;
  display: flex;
  flex-direction: column;
  margin: 3rem auto;
  padding: 2rem;
  border-radius: 0.5rem;
  text-align: center;

  @media (max-width: 800px) {
    width: 90%;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 75%;
  margin: 0 auto;
`;

const AdminPage = () => {
  const isClient = typeof window !== "undefined";
  const router = useRouter();

  const [token, setToken] = React.useState<string | null>(null);
  const [error, setError] = React.useState(false);
  const [formData, setFormData] = React.useState({
    title: "",
    author: "",
    content: "",
    slug: "",
  });
  const [image, setImage] = React.useState<File | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.files && e.target.files[0] !== null) {
      setImage(e.target.files[0]);
    }
  };

  React.useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  React.useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.post("/api/checkAuth", { token });
      } catch (err) {
        setError(true);
      }
    };
    if (token) {
      checkAuth();
    }
  }, [token]);

  if (isClient) {
    if (!token && error) {
      router.push("/admin/login");
    }
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const db = fb.firestore();
    const storage = fb.storage();
    const lastPostNumber: number = await (
      await db.collection("posts").orderBy("n", "desc").limit(1).get()
    ).docs[0].data().n;

    if (image !== null) {
      const pathName = `images/${Date.now()}-${image.name}`;
      const uploadTask = storage.ref(pathName).put(image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref(pathName)
            .getDownloadURL()
            .then((url) => {
              db.collection("posts")
                .add({
                  ...formData,
                  main_image: url,
                  createdAt: new Date(Date.now()),
                  n: lastPostNumber + 1,
                })
                .then(() => alert("Added Post successfully"))
                .catch((err) => {
                  alert("An error has occured");
                  console.log(err);
                });
            });
        }
      );

      setFormData({ title: "", content: "", author: "", slug: "" });
    }
  };

  return (
    <div>
      <Head>
        <title>Admin page - Add Post</title>
      </Head>

      <Container>
        <h1>Add Post</h1>
        <Form method="POST" onSubmit={onSubmit}>
          <TextField
            name="title"
            id="title"
            label="Title"
            value={formData.title}
            onChange={handleChange}
          />
          <TextField
            name="author"
            id="author"
            label="Author"
            value={formData.author}
            onChange={handleChange}
          />
          <TextField
            name="content"
            id="content"
            label="Content (HTML included)"
            multiline
            rows={6}
            variant="outlined"
            value={formData.content}
            onChange={handleChange}
          />
          <TextField
            name="slug"
            id="slug"
            label="slug (Short Link)"
            value={formData.slug}
            onChange={handleChange}
          />
          <InputLabel htmlFor="main_image">Main Image (1600x900)</InputLabel>
          <Input
            name="main_image"
            type="file"
            id="main_image"
            onChange={handleImage}
          />
          <input type="submit" value="Add Post" />
        </Form>
      </Container>
    </div>
  );
};

export default AdminPage;
