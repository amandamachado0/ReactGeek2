import { Routes, Route } from 'react-router-dom';
import Inicio from './Inicio';
import Sobre from './Sobre';
import Disney from './Disney';
import Netflix from './Netflix';
import Primevideo from './Primevideo';
import Cinema from './Cinema';
import HBO from './HBO';
import News from './News';
import Assine from './Assine';
import { useState, useEffect } from 'react';
import Avaliacoes from './Avaliacoes';

function MainContainer() {

    const [usuarios, setUsuarios] = useState(() => {
    const UserSalvos = localStorage.getItem("usuarios");
    return UserSalvos ? JSON.parse(UserSalvos) : [];
});

useEffect(() => {
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}, [usuarios]);


const [comentarios, setComentarios] = useState(() => {
    const ComeSalvos = localStorage.getItem("comentarios");
    return ComeSalvos ? JSON.parse(ComeSalvos) : [];
});

useEffect(() => {
    localStorage.setItem("comentarios", JSON.stringify(comentarios));
}, [comentarios]);


    return (
        <main>
            <Routes>
                <Route
                    path="/"
                    element={<Inicio comentarios={comentarios} />}
                />

                <Route path="/sobre" element={<Sobre />} />
                <Route path="/disney" element={<Disney />} />
                <Route path="/netflix" element={<Netflix />} />
                <Route path="/hbo" element={<HBO />} />
                <Route path="/primevideo" element={<Primevideo />} />
                <Route path="/cinema" element={<Cinema />} />
                <Route path="/news/:slug" element={<News />} />

                <Route
                    path="/assine"
                    element={
                        <Assine
                            usuarios={usuarios}
                            setUsuarios={setUsuarios}
                        />
                    }
                />

                <Route
                    path="/avaliacoes"
                    element={
                        <Avaliacoes
                            usuarios={usuarios}
                            comentarios={comentarios}
                            setComentarios={setComentarios}
                        />
                    }
                />
            </Routes>
        </main>
    );
}

export default MainContainer;