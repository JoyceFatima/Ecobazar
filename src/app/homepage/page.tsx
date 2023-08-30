import { image1 } from "@/assets";
import Header from "../../components/Header";
import ImageCarousel from "@/components/ImageCarousel";
import TitleWithLink from "@/components/TitleWithLinkProps";
import CustomCard from "@/components/CustomCard";

export default function HomePage() {
  const images = [image1.src, image1.src, image1.src];

  return (
    <div className="mb-36">
      <Header companyName="123-456-7890" />
      <ImageCarousel images={images} />

      <div className="flex items-center justify-center">
        <div className="w-[19.5rem] h-[14rem] py-10 px-0 md:px-10 bg-white transition duration-300 ease-in-out transform border-b-2 border-gray-100 hover:border-b-4 hover:border-green-400">
          <img
            src="/caminho-da-imagem.jpg"
            alt="Imagem"
            className="w-16 h-16 mx-auto"
          />
          <h3 className="text-center mt-4 text-lg font-semibold">
            Título do H3
          </h3>
          <span className="block text-center text-gray-400 mt-2">
            Texto de exemplo
          </span>
        </div>
        <div className="w-[19.5rem] h-[14rem] py-10 px-0 md:px-10 bg-white transition duration-300 ease-in-out transform  border-b-2 border-gray-100 hover:border-b-4 hover:border-green-400">
          <img
            src="/caminho-da-imagem.jpg"
            alt="Imagem"
            className="w-16 h-16 mx-auto"
          />
          <h3 className="text-center mt-4 text-lg font-semibold">
            Título do H3
          </h3>
          <span className="block text-center text-gray-400 mt-2">
            Texto de exemplo
          </span>
        </div>
        <div className="w-[19.5rem] h-[14rem] py-10 px-0 md:px-10 bg-white transition duration-300 ease-in-out transform  border-b-2 border-gray-100 hover:border-b-4 hover:border-green-400">
          <img
            src="/caminho-da-imagem.jpg"
            alt="Imagem"
            className="w-16 h-16 mx-auto"
          />
          <h3 className="text-center mt-4 text-lg font-semibold">
            Título do H3
          </h3>
          <span className="block text-center text-gray-400 mt-2">
            Texto de exemplo
          </span>
        </div>
        <div className="w-[19.5rem] h-[14rem] py-10 px-0 md:px-10 bg-white transition duration-300 ease-in-out transform  border-b-2 border-gray-100 hover:border-b-4 hover:border-green-400">
          <img
            src="/caminho-da-imagem.jpg"
            alt="Imagem"
            className="w-16 h-16 mx-auto"
          />
          <h3 className="text-center mt-4 text-lg font-semibold">
            Título do H3
          </h3>
          <span className="block text-center text-gray-400 mt-2">
            Texto de exemplo
          </span>
        </div>
      </div>
      <TitleWithLink title="Featured Products" linkUrl="" linkText="View All"/>
      <div className="flex items-center justify-center mx-56">
        <CustomCard
          imagePath="/caminho-da-imagem.jpg"
          altText=""
          description="Green Apple"
          text="ASD"
          likeds={2}
        />
        <CustomCard
          imagePath="/caminho-da-imagem.jpg"
          altText=""
          description="Green Apple"
          text="ASD"
          likeds={2}
        />
        <CustomCard
          imagePath="/caminho-da-imagem.jpg"
          altText=""
          description="Green Apple"
          text="ASD"
          likeds={2}
        />
        <CustomCard
          imagePath="/caminho-da-imagem.jpg"
          altText=""
          description="Green Apple"
          text="ASD"
          likeds={2}
        />
      </div>
      <TitleWithLink title="Shop by Top Categories" linkUrl="" linkText="View All"/>
      <ImageCarousel images={images}/>
    </div>
  );
}
