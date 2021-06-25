import Head from "next/head";
import styled from "styled-components";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";

const Main = styled.div`
  margin-top: 4rem !important;
`;

const Container = styled.div`
  width: 66%;
  margin: 6rem auto;
  color: black;
  background-color: whitesmoke;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;

  h1 {
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #3f51b5;
  }

  @media (max-width: 800px) {
    width: 90%;
  }
`;

const AboutPage = () => {
  return (
    <Main>
      <Head>
        <title>About</title>
      </Head>

      <Navbar />

      <Container>
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio cumque
          nesciunt in ad quod repellat, quia rem nulla dolor perferendis iure
          quibusdam commodi nobis facere libero dignissimos soluta repudiandae
          quam, accusantium fugit. Cum quis adipisci, suscipit temporibus
          facilis voluptate, deserunt perspiciatis nostrum totam reprehenderit
          officiis odio maxime vero. Laborum maiores omnis enim architecto
          repellendus harum nihil voluptatem sunt provident, dolorem odit quod
          ea, dignissimos odio? Nisi aut quisquam nulla sunt, adipisci illum
          dolor, minus atque accusamus eaque sequi voluptatem assumenda, cum
          similique? Odio quis earum inventore, repellat ipsum beatae temporibus
          dignissimos excepturi. Voluptatum reprehenderit neque, odit,
          asperiores voluptate similique vel magni quam iste ratione eum?
          Voluptate, quidem, amet facere id laborum cumque dicta est ex magni,
          facilis quam minima itaque! Magnam pariatur non quibusdam iure,
          deserunt quod aperiam at voluptas magni, numquam minus repellendus
          omnis! Eius, temporibus vero debitis reprehenderit ab quibusdam,
          nostrum sed consequatur, velit iusto nobis. Aliquam distinctio alias
          qui rem magni atque voluptates deleniti cumque, delectus nostrum eaque
          ad est consequuntur animi illo maxime iusto quia soluta, quasi,
          reprehenderit assumenda esse cupiditate possimus debitis? Illo
          voluptatum odio voluptas, perferendis repellendus, recusandae a dicta
          magni quam nam, obcaecati quod doloremque quaerat. A ipsam mollitia
          expedita possimus facilis id omnis quasi repellat quos vitae hic ullam
          officia, rerum iure quod explicabo quibusdam magni molestiae molestias
          dignissimos voluptate. Assumenda quaerat nesciunt autem et eaque
          impedit quos sint harum. Quo perferendis amet, eaque maxime iste ipsa
          aliquam blanditiis molestiae! Voluptate minus, voluptas fuga, quidem,
          mollitia fugit vero repudiandae delectus consequatur ipsa repellendus
          doloribus dolor explicabo rem? Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Aspernatur eveniet praesentium omnis repellat eius
          at reprehenderit, assumenda aut recusandae ad sunt ducimus tempore
          consequatur ipsam facilis amet. Voluptatum enim veritatis nostrum
          aspernatur molestiae ut, eaque numquam accusantium, similique, et
          nisi. Illo veniam fugiat molestias mollitia in sint consectetur totam
          nulla nostrum? Assumenda, accusantium enim! Quo a animi quasi
          provident, distinctio dignissimos voluptatem, quisquam aliquid tempora
          temporibus possimus, neque assumenda numquam asperiores placeat amet
          non delectus earum molestias debitis dolores sit iste eaque eligendi.
          Nemo in est, earum iste eveniet rem error iusto esse ducimus minus
          inventore similique accusamus odit dignissimos nam impedit itaque
          magnam, alias culpa. Numquam similique ut perspiciatis fuga ipsam
          natus possimus culpa. Sit pariatur molestias, asperiores nam impedit
          quaerat quidem? Sapiente sit consequatur a, neque quia odit aperiam
          sequi harum perferendis modi? Perferendis impedit consequuntur
          quisquam placeat voluptatem quasi et omnis incidunt, reiciendis
          eveniet excepturi molestias! Accusamus itaque blanditiis facere
          laudantium dolorem?
        </p>
      </Container>

      <Footer margin={undefined} />
    </Main>
  );
};

export default AboutPage;
