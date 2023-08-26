import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ImTwitter } from "react-icons/im";
import { ImInstagram } from "react-icons/im";
import { ImGithub } from "react-icons/im";
import { AiOutlineLinkedin } from "react-icons/ai";

function Footer() {

    return (
        <>
        <div >
                <footer class=" text-center text-white" style={{backgroundColor: "rgb(0, 0, 0, 0.2)"}}>
                    <div class="container p-4 pb-0">
                        <section class="mb-4">
                            <a class="btn btn-outline-light btn-floating m-1" href="https://twitter.com/SharmaAmeek" role="button"
                            target='blank'><i><ImTwitter/></i
                            ></a>
                            <a class="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/ameek_sharma13/" role="button"
                            target='blank'><i ><ImInstagram/></i
                            ></a>
                            <a class="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/ameek-sharma-636183247/" role="button"
                            target='blank'><i><AiOutlineLinkedin/></i
                            ></a>
                            <a class="btn btn-outline-light btn-floating m-1" href="https://github.com/imAmeeksharma04" role="button"
                            target='blank'><i><ImGithub/></i
                            ></a>
                        </section>
                        </div>
                    <div class="text-center p-3" style={{backgroundColor: "rgb(0, 0, 0, 0.2)"}}>
                        © 2023 Copyright:
                        <a class="text-white" href="https://github.com/imAmeeksharma04" target='blank'>Ameek Sharma</a>
                    </div>
                    </footer>
            </div>
            </>
    );
}
export default Footer;
