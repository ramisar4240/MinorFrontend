import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog"
import CreateProjectForm from "../Project/CreateProjectForm"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { PersonIcon } from "@radix-ui/react-icons"
import { useNavigate } from "react-router-dom"





const Navbar = () => {
    const navigate = useNavigate()
  return (
    <div className='border-b py-4 px-5 flex items-center justify-between bg-green-900 text-white shadow-md'>
        <div className='flex items-center gap-3'>
            <Button  onClick={()=>navigate("/")} className='cursor-pointer hover:bg-blue-700' variant='ghost'> Project Management</Button>
            <Dialog>
                <DialogTrigger>
                    <Button variant='ghost' className="text-white  hover:bg-blue-700">New Project</Button>
                </DialogTrigger>

                <DialogContent>

                
                    <DialogHeader> Create New Project</DialogHeader>
                    <CreateProjectForm/>

                </DialogContent>

            </Dialog>

            <Button onClick={() =>navigate("/upgrade_plan")} variant='ghost' className="hover:bg-blue-700">Upgrade</Button>

        </div>

        <div className='flex gap-3 items-center'>
            <DropdownMenu>

                <DropdownMenuTrigger>

                    <Button variant="outline" size="icon" className="rounded-full border-2 border-gray-500 bg-blue-800">
                        <PersonIcon/>
                    </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="bg-gray-800 text-white">
                    <DropdownMenuItem className="hover:bg-gray-700 cursor-pointer">
                        Logout
                    </DropdownMenuItem>
                </DropdownMenuContent>

            </DropdownMenu>

            <p>Ram</p>

        </div>
      
    </div>
  )
}

export default Navbar