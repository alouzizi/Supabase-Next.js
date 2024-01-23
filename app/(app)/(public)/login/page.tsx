'use client';
// import { createSupabaseForRouteHandler } from "@/lib/supabase.server";
import { supabaseForClientComponent} from "@/lib/supabase.client";
import { useRouter } from "next/navigation";
import {  useEffect, useState } from "react";

import {
	authenticateUsingPassword,
  signupUsingPassword,
} from "@/lib/supabase.auth.client";

// import { createSupabaseForServerComponent } from "@/lib/supabase.server";


export default function Page() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
	const [fullName, setFullName] = useState("");
  // const  supabase = createClientComponentClient();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // const supabase = supabaseForClientComponent();

  // useEffect(() => {
  //   async function getUser() {

  //     const {
  //       data: { user },
  //     } = await supabase.auth.getUser();
  //     // const {data: {session},}= await supabase.auth.getUser();
  //     setUser(user);
  //     setLoading(false);
  //   }
  //   getUser();
  // }, []);

  const handleSingUp = async () => {
    const fullName = ''; // Declare and initialize the fullName variable
    await signupUsingPassword({
      full_name: fullName,
      email,
      password,
    });
    router.refresh();
    setEmail('');
    setPassword('');
  };


      const handleLogout = async () => {
        // await supabase.auth.signOut();
        // router.refresh();
        // setUser(null)
    }
  const handleSignIn = async (e: any) => {
    // e.preventDefault();
   const {error} = await authenticateUsingPassword({ email, password });
   if(!error) {
      router.push('dashboard');
      router.refresh();
   }
    // console.log("errore", errore);
    // router.refresh();
    // setEmail('');
    // setPassword('');
  };
  // console.log("loading", loading, "user", user);
  //   if(loading) {
  //     return <div>Loading...</div>
  //     // router.push('/');
  //   }
  //   if (user){
  //     return (
  //         <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
  //         <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md w-96 text-center">
  //             <h1 className="mb-4 text-xl font-bold text-gray-700 dark:text-gray-300">
  //                 You're already logged in
  //             </h1>
  //             <button 
  //                 onClick={handleLogout}
  //                 className="w-full p-3 rounded-md bg-red-500 text-white hover:bg-red-600 focus:outline-none"
  //             >
  //                 Logout
  //             </button>
  //         </div>
  //     </div>
  //     )
  // }
  return (
    <main className="h-screen flex items-center justify-center bg-gray-800 p-6">
      <div className="bg-gray-900 p-8 rounded-lg shadow-md w-96">
            <input
            value={fullName}
            onChange={(e: any) =>
              setFullName(e.target.value)
            }
            placeholder="Full Name"
            className=" form_input mb-4 w-full p-3 rounded-md border border-gra-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e: any) =>
              setEmail(e.target.value)
            }
            placeholder="Email"
            className="mb-4 w-full p-3 rounded-md border border-gra-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e: any) =>
              setPassword(e.target.value)
            }
            placeholder="Password"
            className="mb-4 w-full p-3 rounded-md border border-gra-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"

          />
          <button onClick={handleSingUp}
          className="w-full mb-2 p-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:outline-none"
          >Sing Up</button>
          <button onClick={handleSignIn}
          className="w-full  p-3 rounded-md bg-gray-700 text-white hover:bg-gray-600 focus:outline-none"
          >Sing In</button>
      </div>
    </main>
  );
}
