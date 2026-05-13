'use client'

import {useScrollReveal} from '@/hooks/useScrollReveal'
import Image from "next/image";
import Link from "next/link";

const projects = [
    {
        id: 'apex',
        large: true,
        bg: 'linear-gradient(135deg, #0d1117 0%, #1a1a2e 50%, #16213e 100%)',
        label: (
            <span style={{
                background: 'linear-gradient(90deg, #c8ff00, #7affb9)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
            }}>
                <Image objectFit={""} fill={true} src={"/freshline.png"} alt={"freshline"}/>
        </span>
        ),
        tag: 'B2B E-Commerce',
        name: 'Freshline',
        delay: '',
        link:"https://freshline.no"
    },
    // {
    //     id: 'modo',
    //     large: false,
    //     bg: 'linear-gradient(135deg, #1a0a2e, #2d1b69)',
    //     label: <span style={{color: '#c8ff00'}}>MODO</span>,
    //     tag: 'E-Commerce',
    //     name: 'Modo Fashion Store',
    //     delay: '',
    // },
    // {
    //     id: 'vera',
    //     large: false,
    //     bg: 'linear-gradient(135deg, #0a2e1a, #1a4a2e)',
    //     label: <span style={{color: '#c8ff00'}}>VERA</span>,
    //     tag: 'Brand Identity',
    //     name: 'Vera Botanicals',
    //     delay: 'reveal-delay-1',
    // },
    // {
    //     id: 'flux',
    //     large: false,
    //     bg: 'linear-gradient(135deg, #2e0a0a, #4a1a1a)',
    //     label: <span style={{color: '#c8ff00'}}>FLUX</span>,
    //     tag: 'Mobile App',
    //     name: 'Flux Finance App',
    //     delay: 'reveal-delay-2',
    // },
]

export default function PortfolioSection() {
    useScrollReveal()

    return (
        <section id="work">
            <div className="section-tag">Portfolio</div>
            <h2 className="section-title reveal">Selected Work</h2>

            <div className="portfolio-grid">
                {projects.map((p) => (
                    <Link href={p.link} target={"_blank"}
                        key={p.id}
                        className={`portfolio-item reveal ${p.delay} ${p.large ? 'large' : ''}`}
                    >
                        <div className="bg-red text-white " style={{background: p.bg}}>
                            {p.label}
                        </div>
                        <div className="portfolio-overlay">
                            <div className="portfolio-tag">{p.tag}</div>
                            <div className="portfolio-name">{p.name}</div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}
