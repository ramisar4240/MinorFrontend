import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { PlusIcon } from "@radix-ui/react-icons"
import ChatBox from "./ChatBox"
import IssueList from "./IssueList"
import InviteUserForm from "./InviteUserForm"


const ProjectDetails = () => {
    const handleProjectInvitation=()=>{

    }
  return (
    <>
    <div className="mt-5 lg:px-10 bg-green-800">
        <div className="lg:flex gap-5 justify-between pb-4">
            <ScrollArea className='h-screen lg:w-[69%] pr-2'>
                <div className="text-gray-400 pb-10 w-full">
                    <h1 className="text-lg font-semibold pb-5">
                        Create Ecommerce Website Using React

                    </h1>
                    <div className="space-y-5 pb-10 text-sm">
                    <p className="w-full md:max-w-lg lg:max-w-xl ">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

                    <div className="flex">
                        <p className="w-36"> Project Lead:</p>
                        <p>Ram</p>

                    </div>

                    <div className="flex">
                        <p className="w-36">Members:</p>
                        <div className="flex items-center gap-2">
                            {[1,1,1,1].map((item)=> <Avatar className="cursor-pointer" key={item}>

                                <AvatarFallback className="hover:bg-blue-800">R</AvatarFallback>

                            </Avatar>)}

                        </div>

                        <Dialog>
                            <DialogTrigger>
                                <DialogClose>
                                    <Button size='sm' variant="outline" onClick={handleProjectInvitation} className="ml-2 hover:bg-blue-800"> 
                                        <span >
                                            invite
                                        </span>
                                        <PlusIcon className="w-3 h-3"/>
                                    </Button>
                                </DialogClose>
                            </DialogTrigger>

                            <DialogContent>
                                <DialogHeader>
                                    Invite User
                                </DialogHeader>
                              <InviteUserForm/>
                            </DialogContent>

                        </Dialog>

                    </div>

                    <div className="flex">
                        <p className="w-36"> Category:</p>
                        <p>FullStack</p>

                    </div>
                    <div className="flex">
                        <p className="w-36"> Project Lead:</p>
                  <Badge>Ram</Badge>

                    </div>

                </div>

             <section>
                <p  className="py-5 border-b text-lg -tracking-wider"> tasks 
                </p>
                <div className="lg:flex md:flex gap-3 justify-between py-5 bg-green-800">

                    <IssueList status="pending" title="Todo List"/>
                    <IssueList status="in_progress" title="In progress"/>
                    <IssueList status="done" title="Done"/>
                </div>
             </section>

                

                </div>

  



            </ScrollArea>
            <div className="lg:w-[30%] rounded-md sticky right-5 top-10">
                <ChatBox/>
            </div>

        </div>
      
    </div>
    </>
  )
}

export default ProjectDetails



