import Image from "next/image";

function printHome(): string{
  let output: string = "";
  for (let i = 0; i < 5000; i++){
    output += "Word ";
  }
  output += "."
  return output;
}

export default function Home() {
  return (
    <p>
      {printHome()}
    </p>
  );
}
