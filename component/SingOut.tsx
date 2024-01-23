import { createSupabaseForServerAction } from "@/lib/supabase.server";
import { redirect } from "next/navigation";
import React from "react";

export default function SignOut() {
	const logout = async () => {
		"use server";
		const supabase = createSupabaseForServerAction();
		await supabase.auth.signOut();
		redirect("/login");
	};
	return (
        <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md w-96 text-center">
              <h1 className="mb-4 text-xl font-bold text-gray-700 dark:text-gray-300">
                  You're already logged in
              </h1>
		        <form action={logout}>
                
			        <button className="w-full p-3 rounded-md bg-red-500 text-white hover:bg-red-600 focus:outline-none">Sign Out</button>
		        </form>
            </div>
        </div> 
	);
}



