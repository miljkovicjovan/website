import { Button, Stack } from "react-bootstrap";
import { Link } from "react-scroll";

export default function About() {
    return (
        <Stack id="about" className="bg-dark text-light py-5 px-5 flex-lg-row justify-content-around">
            <Stack className="px-0 px-md-5 col-lg-3 col-12">
                <img width="200" height="200" className="rounded-circle mb-3" 
                src="https://avatars.githubusercontent.com/u/77690201?v=4" alt="Profile of Jovan Miljkovic"/>
                <h2>I'm Jovan Miljkovic</h2>
                <h5>Full-Stack Developer, based in Serbia</h5>
            </Stack>
            <Stack className="px-0 px-md-5 col-lg-6 col-12 mt-5 mt-lg-0 align-self-center">
                <h1>Learner, developer, and enthusiast immersed in the realms of both timeless and cutting-edge technologies.</h1>
                <Stack gap={2} className="flex-sm-row">
                    <Button className="border-light" variant="dark">
                        <Link to="wip" spy={true} smooth={true} duration={500}>My Work</Link>
                    </Button>
                    <Button className="border-light" variant="dark">
                        <Link to="wip" spy={true} smooth={true} duration={500}>My Blog</Link>
                    </Button>
                    <Button variant="secondary">
                        <Link to="contact" spy={true} smooth={true} duration={500}>Contact Me</Link>
                    </Button>
                </Stack>
            </Stack>
        </Stack>
    );
}