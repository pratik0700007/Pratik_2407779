import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
  import { useState } from "react";
  import axios from "axios";
  
  export default function AddUser() {
    const [postPayloadUser, setPostPayloadUser] = useState<any>({
      name: "",
      email: "",
      department: "",
      photo: "",
    });
  
    const [photoFile, setPhotoFile] = useState<File | null>(null);
  
    const handleAddUser = async () => {
      try {
        const formData = new FormData();
        formData.append("username", postPayloadUser.name);
        formData.append("email", postPayloadUser.email);
        formData.append("department", postPayloadUser.department);
        if (photoFile) {
          formData.append("photo", photoFile);
        }
        formData.append("role", "Employee");
  
        const response = await axios.post("https://assessment-api-biay.onrender.com/users", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log(response.data);
      } catch (error) {
        console.error("Failed to add user", error);
      }
    };
  
    return (
      <Dialog>
        <DialogTrigger>Add User</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add User</DialogTitle>
            <DialogDescription className="flex flex-col gap-3">
              <label>Name</label>
              <input
                value={postPayloadUser.name}
                onChange={(e) =>
                  setPostPayloadUser({ ...postPayloadUser, name: e.target.value })
                }
                type="text"
                className="border-black border-none outline-none"
              />
              <label>Email</label>
              <input
                value={postPayloadUser.email}
                onChange={(e) =>
                  setPostPayloadUser({
                    ...postPayloadUser,
                    email: e.target.value,
                  })
                }
                type="text"
                className="border-black border-none outline-none "
              />
              <label>Photo</label>
              <input
                type="file"
                onChange={(e) => setPhotoFile(e.target.files?.[0] || null)}
                className="border-black border-none outline-none "
              />
              <label>Department</label>
              <input
                value={postPayloadUser.department}
                onChange={(e) =>
                  setPostPayloadUser({
                    ...postPayloadUser,
                    department: e.target.value,
                  })
                }
                type="text"
                className="border-black border-none outline-none "
              />
              <button onClick={handleAddUser} className="mt-4 p-2 bg-blue-500 text-white">
                Submit
              </button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );
  }