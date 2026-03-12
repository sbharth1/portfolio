export default function Header() {
  return (
    <div className="bg-[#0d1117] w-screen overflow-x-hidden font-mono p-4">
      <div className=" mx-auto text-center w-screen">
        <pre className=" mb-3 font-mono whitespace-pre text-sm ">
          {`
  _________.__    .___  .___.__                   __  .__     
 ╱   _____╱│__│ __│ _╱__│ _╱│  │__ _____ ________╱  │_│  │__  
 ╲_____  ╲ │  │╱ __ │╱ __ │ │  │  ╲╲__  ╲╲_  __ ╲   __╲  │  ╲ 
 ╱        ╲│  ╱ ╱_╱ ╱ ╱_╱ │ │   Y  ╲╱ __ ╲│  │ ╲╱│  │ │   Y  ╲
╱_______  ╱│__╲____ ╲____ │ │___│  (____  ╱__│   │__│ │___│  ╱
        ╲╱         ╲╱    ╲╱      ╲╱     ╲╱                 ╲╱ 
        
`}
        </pre>
        <pre className="mb-3 font-mono whitespace-pre text-sm">
          {String.raw`

`}
        </pre>
      </div>
    </div>
  );
}
