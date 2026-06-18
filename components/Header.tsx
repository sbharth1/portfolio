"use client";

export default function Header() {
  return (
    <div className="bg-[#0d1117] w-full  font-mono p-4">
      <div className="w-full text-center ">
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
      </div>
       <div className="text-center">
        <div className="text-[#CBD5E1] font-KG">
          <p>Welcome to my portfolio!</p>
          <p>
            Type <span className="text-[#05CE91]">`help`</span> to get a list of available commands.
          </p>
        </div>
      </div>
    </div>
  );
}
