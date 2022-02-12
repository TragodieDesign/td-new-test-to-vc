import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'


const Header = () => (
    <div class="header">
        <div class="social-media">
            <div class="social-btn">F</div>
            <div class="social-btn">I</div>
            <div class="social-btn">B</div>
            <div class="social-btn">L</div>
            <div class="social-btn">G</div>
        </div>


        <motion.div
            class="logo-wrapper"
        animate={{ scale: 1 }}
      whileHover={{ scale: 1.2}}>
    <Image
    src="/../public/logo/logo150.png"
            width={80} height={80}>
    </Image>
        </motion.div>
        <div class="navbar">
            <div class="header-btn">
                <Link href="/">
                    <a href="/">Home </a>
                </Link>
            </div>
            <div class="header-btn">
                <Link href="/projects">
                    <a href="/projects">Projetos </a>
                </Link>
            </div>
            <div class="header-btn">
                <Link href="/about">
                    <a href="/about">Sobre </a>
                </Link>
            </div>
            <div class="header-btn">
                <Link href="/">
                    <a href="/">Posts </a>
                </Link>
            </div>
        </div>

    </div>
);

export default Header
