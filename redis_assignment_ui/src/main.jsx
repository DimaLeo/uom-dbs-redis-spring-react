import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {AuthContextProvider} from "./contexts/AuthContext.jsx";
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import {BrowserRouter} from "react-router-dom";

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <AuthContextProvider>
            <QueryClientProvider client={queryClient}>
                <App/>
            </QueryClientProvider>
        </AuthContextProvider>
    </BrowserRouter>

)
