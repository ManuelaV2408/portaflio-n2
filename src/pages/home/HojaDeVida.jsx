import React, { useState } from "react";
import "./HojaDeVida.css";

const HojaDeVida = () => {
    const [activeSection, setActiveSection] = useState('informacion');

    const sections = {
        informacion: {
            title: 'Información Personal',
            content: (
                <div className="section-grid">
                    <div className="card">
                        <h3>👤 Sobre Mí</h3>
                        <p>Soy una desarrolladora apasionada por la tecnología y la innovación. Me encanta crear soluciones que impacten positivamente en la vida de las personas y proteger sus interacciones en el internet, manteniendo un lugar seguro para su informacion personal.</p>
                    </div>
                    <div className="card">
                        <h3>🎓 Educación</h3>
                        <p><strong>Tecnico Auxiliar en Desarrollo de Software</strong><br/>
                        Pascual Bravo<br/>
                        2024 - 2025</p>
                        <p><strong>Certificaciones</strong><br/></p>
                        <a href="/sd.jpg">Impacto Maker <br/></a>
                        <a href="/sdf.jpg">Coursera <br/></a>
                        <a href="/ss.jpg">Alura <br/></a>
                    </div>
                    <div className="card">
                        <h3>💼 Experiencia</h3>
                        <p><strong>Analista en ciberseguridad</strong><br/>
                        IBM.<br/>
                        2025 - Presente</p>
                    </div>
                </div>
            )
        },
        habilidades: {
            title: 'Habilidades Técnicas',
            content: (
                <div>
                    <p style={{marginBottom: '20px'}}>
                        Además de mis habilidades técnicas, también cuento con habilidades blandas que potencian mi desempeño profesional.
                    </p>
                    <div className="skill-item">
                        <h3>Python</h3>
                        <div className="skill-bar">
                            <div className="skill-progress" style={{width: '90%'}}></div>
                        </div>
                    </div>
                    <div className="skill-item">
                        <h3>Java</h3>
                        <div className="skill-bar">
                            <div className="skill-progress" style={{width: '85%'}}></div>
                        </div>
                    </div>
                    <div className="skill-item">
                        <h3>CSS/HTML</h3>
                        <div className="skill-bar">
                            <div className="skill-progress" style={{width: '88%'}}></div>
                        </div>
                    </div>
                    <div className="skill-item">
                        <h3>JavaScript</h3>
                        <div className="skill-bar">
                            <div className="skill-progress" style={{width: '75%'}}></div>
                        </div>
                    </div>
                    <div style={{marginTop: '30px'}}>
                        <h3>Habilidades Blandas</h3>
                        <ul>
                            <li>Comunicación asertiva</li>
                            <li>Trabajo en equipo</li>
                            <li>Resolución de problemas</li>
                            <li>Adaptabilidad</li>
                            <li>Pensamiento crítico</li>
                        </ul>
                    </div>
                </div>
            ),
        },
        proyectos: {
            title: 'Proyectos Destacados',
            content: (
                <div>
                    <div className="project-card">
                        <h3>🎯 E-commerce Platform</h3>
                        <p>Plataforma completa de comercio electrónico con React, Node.js y MongoDB. Incluye carrito de compras, pasarela de pago y panel administrativo.</p>
                        <p><strong>Tecnologías:</strong> React, Node.js, MongoDB, Stripe</p>
                    </div>
                    <div className="project-card">
                        <h3>App de Gestión de Tareas</h3>
                        <p>Aplicación móvil para gestión de tareas con sincronización en la nube y recordatorios .</p>
                        <p><strong>Tecnologías:</strong> React Native, php, Redux</p>
                    </div>
                    <div className="project-card">
                        <h3>Gestion de notas </h3>
                        <p>Espacio virtual interactivo para el control de notas en un plantel educativo generando promedio final del estidiante.</p>
                        <p><strong>Tecnologías:</strong> HTML, CSS, JavaScript, php</p>
                    </div>
                </div>
            )
        },
        hobbies: {
            title: 'Hobbies e Intereses',
            content: (
                <div>
                    <div className="hobby-item">
                        <div className="hobby-icon">📚</div>
                        <div>
                            <h4>Lectura </h4>
                            <p>Me gusta descrubrir nuevos mundos atraves de las paginas</p>
                        </div>
                    </div>
                    <div className="hobby-item">
                        <div className="hobby-icon">🎮</div>
                        <div>
                            <h4>Videojuegos</h4>
                            <p>Disfruto de juegos de estrategia que desafían la mente</p>
                        </div>
                    </div>
                    <div className="hobby-item">
                        <div className="hobby-icon">🚴</div>
                        <div>
                            <h4>Ciclismo</h4>
                            <p>Dar paseos en bicicleta con mi hermana para mantenerme activa y disfrutar de un nuevo ambiente</p>
                        </div>
                    </div>
                    <div className="hobby-item">
                        <div className="hobby-icon">✈️</div>
                        <div>
                            <h4>Viajes</h4>
                            <p>Explorar nuevas culturas y paisajes alrededor del pais y proximamente del mundo</p>
                        </div>
                    </div>
                </div>
            )
        }
    };

    return (
        <div className="container">
            <div className="header">
                <div className="profile-picture">
                    <img src="/Manuela Villada Salas.jpg" alt="Foto Manuela" />
                </div>
                <h1>Manuela Villada Salas</h1>
                <div className="subtitle">Analista en ciberseguridad</div>
                <div className="contact-info">
                    <p>📧 villada.sadep@gmail.com | 📱 304 4897245</p>
                    <p>|📍 Medellin, Colombia | </p>
                </div>
            </div>

            <div className="buttons-container">
                <button 
                    className={`btn ${activeSection === 'informacion' ? 'btn-primary' : 'btn-outline'}`}
                    onClick={() => setActiveSection('informacion')}
                >
                    Información
                </button>
                <button 
                    className={`btn ${activeSection === 'habilidades' ? 'btn-primary' : 'btn-outline'}`}
                    onClick={() => setActiveSection('habilidades')}
                >
                    Habilidades
                </button>
                <button 
                    className={`btn ${activeSection === 'proyectos' ? 'btn-primary' : 'btn-outline'}`}
                    onClick={() => setActiveSection('proyectos')}
                >
                    Proyectos
                </button>
                <button 
                    className={`btn ${activeSection === 'hobbies' ? 'btn-primary' : 'btn-outline'}`}
                    onClick={() => setActiveSection('hobbies')}
                >
                    Hobbies
                </button>
            </div>

            <div className="content-section">
                <h2>{sections[activeSection].title}</h2>
                {sections[activeSection].content}
            </div>

            <div className="footer">
                <p>© 2025 Manuela Villada. Todos los derechos reservados.</p>
            </div>
        </div>
    );
};

export default HojaDeVida;