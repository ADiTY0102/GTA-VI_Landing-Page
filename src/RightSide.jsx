import Button from "./Button.jsx";
export default function RightSide() {
  return (
    <>
      <div className="right-side w-[30%]">
        <h1 className="text-6xl text-pink-500">Still Running</h1>
        <h1 className="text-6xl">Not Hunting..</h1>
        <p className="mt-10 font-[HelveticaNowDisplay]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
          inventore rem laborum nemo repellat. Distinctio, cupiditate molestias.
          Fugiat repellat labore officiis iusto, fuga illum velit quos provident
          iste rerum accusamus!
        </p>
        <p className="mt-3 font-[HelveticaNowDisplay]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex omnis
          sapiente nostrum, beatae distinctio laudantium?
        </p>
        <p className="mt-3 font-[HelveticaNowDisplay]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
          ipsum! Cupiditate nobis similique veritatis consectetur perferendis
          modi quod fugit eveniet?
        </p>
        <Button/>
      </div>
    </>
  );
}
