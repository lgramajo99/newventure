import React from 'react'
import reactLogo from '../assets/react.svg'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../store/features/counter/counterSlice';
import Banner from '../components/common/Banner';
import CarouselCards from '../components/common/CarouselCards';
import ProductCard from '../components/common/ProductCard';


function Home() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()


    return (<div>
        <Banner />
        <h1>Pagina de inicio</h1>
        <CarouselCards />

        <button aria-label="Increment value" onClick={() => dispatch(increment())}>Incrementar</button>
        <span>{count}</span>
        <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>Decrementar</button>

        <ProductCard />

        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat porro praesentium maxime non quod vel beatae explicabo, at, nisi hic recusandae. Hic accusantium ex distinctio architecto enim perspiciatis inventore alias unde eius. Quae autem nemo fugit temporibus architecto ex repellendus! Alias, aspernatur obcaecati! Nobis laborum veniam asperiores modi accusantium blanditiis ea deserunt laboriosam eos non, deleniti omnis officia est maiores. Cupiditate ad ipsa explicabo totam. Ipsum placeat adipisci voluptatibus officiis aliquam culpa labore sapiente. Distinctio quod aliquam eum asperiores nulla quos illum veritatis odit rerum error tempore, soluta ipsum maxime labore deleniti ea iure placeat expedita quis nemo ab a consequatur? Necessitatibus numquam in incidunt distinctio suscipit provident. Est et quibusdam consectetur eum rerum consequuntur magni quod minima fuga impedit? Ex unde repudiandae fugit, veritatis quos necessitatibus sapiente voluptatem at id ad suscipit itaque omnis tempore! Fugiat eos eaque labore nobis omnis quis odit, rerum corporis iure earum, neque excepturi numquam, dicta laboriosam animi sed repellendus sunt. Quaerat atque, sit perferendis minus unde error accusantium veritatis. Ratione vero nihil voluptatibus voluptate corrupti quasi neque deserunt, atque iure animi doloremque sed tenetur et alias, quaerat quo eveniet sint optio ducimus asperiores nemo delectus? Dolor accusantium inventore id eaque. Recusandae debitis itaque exercitationem aliquam minus eum perferendis amet, ut vero. Saepe mollitia possimus dolorum officiis et? Totam ad nam voluptas. Debitis omnis unde dicta. Provident aperiam nemo saepe facilis molestias perspiciatis voluptatem perferendis iure animi, dignissimos recusandae maxime esse velit ut nisi doloribus sunt aliquam culpa magnam sapiente beatae cumque, possimus error quisquam. Error adipisci corporis veritatis veniam, ipsum possimus fugit velit, autem iusto aliquam aut ipsa id libero obcaecati voluptate ratione. Et voluptas laboriosam laborum quia maiores placeat enim quam molestiae. Consequatur consequuntur harum nisi cumque aliquid adipisci eligendi nobis totam cupiditate autem aut doloremque, temporibus nulla a animi facilis veritatis libero quo illum. Voluptatum ratione non, sed exercitationem iste architecto praesentium voluptate nam numquam quam expedita illum autem quasi in aliquam! Quam rerum ex eos dolor labore cumque non illum dicta fuga dignissimos vel iusto vero, veniam, minima quisquam. Illo, eos mollitia. Atque debitis perspiciatis natus, tenetur maxime dolores iure aspernatur quidem totam enim neque ullam quia aliquam ipsum velit fuga nihil facilis obcaecati impedit commodi similique numquam! Similique ut soluta ea minus incidunt id blanditiis consequatur odio iure facere quasi veritatis at nesciunt ad dicta, neque iusto facilis dolorem. Suscipit enim deserunt beatae a nulla voluptatibus dignissimos pariatur unde!</p>
    </div>)
}

export default Home;