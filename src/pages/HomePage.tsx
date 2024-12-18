import Link from "@/components/link";
import { IoDocumentAttach } from "react-icons/io5";
import { SiPoetry } from "react-icons/si";
import { LuListTodo ,LuPresentation} from "react-icons/lu";
import { FaFolder } from "react-icons/fa";



const resume_link = "https://drive.google.com/file/d/1RkQ__--VLFiIRi6puqFND_UTH-cw75D3/view?usp=drive_link";


export default function HomePage() {
    return (
        
        <div className=" flex flex-wrap w-full ">
            <div className="pl-1 bg-gray-400 ">
                <div className=" bg-gray-500 pl-2 h-full ">
                    <p>Heyy Everyone !! Its ..</p>
                    <p><span className="text-xl font-bold bg-blue-400 text-orange-500 rounded-md px-2 mr-2">LitRunner </span> here </p>
                    <p className="mt-2">My real name is , </p>
                    <p ><span className="text-xl font-bold bg-blue-400 text-orange-500 rounded-md px-2" >Ronak Singh</span> </p>
                    <p className="mt-2"> I love <span className="font-bold">exploring</span> interesting topics </p>
                    <p>and <span className="font-bold">building</span> cool things. </p>
                </div>               
            </div>

            <div className="ml-2 rounded-md">
                <p className = " text-black text-sm bg-yellow-500 rounded-md mb-2">Some <span className="font-bold">interesting</span> stuff about me</p>
                <div className="">
                    <div >
                        <Link href={resume_link} description="Resume (.pdf)" Icon={IoDocumentAttach}/>
                    <div/>

                    <div className="">
                        <Link href = "example.com" description="Poetry" Icon={SiPoetry}/>
                    </div>

                    <div className="">
                        <Link href = "example.com" description="To-do" Icon={LuListTodo}/>
                    </div>

                    <div className="">
                        <Link href = "example.com" description="files" Icon={FaFolder}/>
                    </div>

                    <div className="">
                        <Link href = "example.com" description="presentation" Icon={LuPresentation}/>
                    </div>
                            
                </div>   
            </div>
                    
        </div>
        </div>
    );
}