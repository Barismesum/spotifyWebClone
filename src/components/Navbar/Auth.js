import React from "react";
import { Menu } from "@headlessui/react";
import { Icon } from "Icons";
function Auth() {
  const user = {
    name: "Barış Mesüm",
    avatar: "https://i.scdn.co/image/ab6775700000ee85ef9ba6f23c1816385691800c",
  };
  return (
    <Menu as="nav" className={"relative"}>
      {({ open }) => (
        <>
          <Menu.Button
            className={
                ` flex items-center h-8 rounded-3xl ${open? 'bg-active' : 'bg-black'} pr-2 hover:bg-active `
            }
          >
            <img
              src={user.avatar}
              className={"w-8 h-8 rounded-full p-1 mr-2 "}
            />
            <span className="text-sm font-semibold mr-2">{user.name}</span>
           <span className={open && 'rotate-180'}>
            <Icon name="downDir" size={16} />
            </span> 
          </Menu.Button>
          <Menu.Items
            className={
              "absolute top-full p-1 right-0 w-48 rounded bg-active translate-y-2"
            }
          >
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 flex justify-between items-center px-2 text-sm rounded ${active && "bg-white bg-opacity-20"}`}
                  href="#"
                >
                  Account 
                  <Icon name="external" size={16} />

                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={` h-10 flex items-center px-2 text-sm rounded ${active && "bg-white bg-opacity-20"}`}
                  href="#"
                >
                  Profie
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={` h-10 flex items-center px-2 text-sm rounded ${active && "bg-white bg-opacity-20"}`}
                  href="#"
                >
                 Log Out
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </>
      )}
    </Menu>
  );
}

export default Auth;
