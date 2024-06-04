import Image from "next/image";

const ProjetUneSolution = (props: any) => {
  console.log(props);
  const image_2_landing_page = require("../../public/image2_landing_page.jpg");
  return (
    <div
      className="
      h-1/2
              grid
               grid-cols-12"
    >
      <div
        className="col-span-5 m-10 p-5 border-32"
        style={{ position: "relative", width: 500, height: 400 }}
      >
        <Image src="/BellesDames.jpg" layout="fill" alt="Bonne maman" />
      </div>
      <div className="col-span-5 m-10 p-5 leading-loose">
        <p>
          Donec bibendum metus a imperdiet posuere. Vivamus nibh neque,
          imperdiet nec ligula et, hendrerit ullamcorper lectus. Morbi
          convallis, erat ut tempor tincidunt, mi risus efficitur ante, nec
          tempus arcu mauris id neque. Aenean imperdiet, nibh nec porttitor
          tempor, sapien metus dapibus quam, congue blandit nisi nibh a nulla.
          Sed ante sapien, imperdiet ut urna vitae, tristique posuere lectus.
          Etiam felis nisl, elementum eget tincidunt a, sodales sagittis erat.
          Mauris et leo tincidunt, lacinia ante eget, dictum dui. Nulla
          fermentum lacus in nibh suscipit pellentesque. Nunc nec euismod arcu,
          sed efficitur nisl. In efficitur et dolor euismod convallis.
        </p>
      </div>
    </div>
  );
};

export default ProjetUneSolution;
