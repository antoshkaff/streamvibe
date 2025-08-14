import AppRouter from '@/router/AppRouter.jsx';
import { ScrollProvider } from '@/context/ScrollContext.jsx';

function App() {
    return (
        <div className="App">
            <ScrollProvider>
                <AppRouter />
            </ScrollProvider>
        </div>
    );
}

export default App;
