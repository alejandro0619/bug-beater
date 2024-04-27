import { AuthContext } from "@/providers/AuthProvider";
import { useContext } from "react";


export default function useAuth() {
    return useContext(AuthContext)
}
