import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer class="py-3 mt-4 bg-dark" data-bs-theme="dark">
            <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                <li class="nav-item">
                    <Link to="/" className="nav-link px-2 text-body-secondary">Home</Link>
                </li>
            </ul>
            <p class="text-center text-body-secondary">Criado por <strong>Igor Fróes</strong></p>
        </footer>
    );
}

export default Footer;