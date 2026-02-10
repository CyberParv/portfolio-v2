"use client";
import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { MoveRight } from "lucide-react";

export default function ProjectsPage() {
    const projects = [
        {
            title: "AI Solutions Intern @ e-tailize",
            description:
                "I like to work with AI-assisted development getting down development time by 80-90% while retaining the security with a strong background in cybersecurity.",
            date: "Dec 2025 - Present",
            tech: ["n8n", "Azure", ".net", "Full Stack"],
            link: "https://e-tailize.com",
        },
        {
            title: "Intern @ Varun Beverages Limited (PepsiCo)",
            description:
                "Built analytics-driven automation and dashboards to streamline alert triage and reporting workflows. Developed data integrations between security tools and internal systems. Analyzed logs and security signals.",
            date: "May 2025 – July 2025",
            tech: ["Python", "SQL", "Automation", "Dashboards"],
            link: "#",
        },
        {
            title: "SecurGeek",
            description:
                "Full-stack platform featuring real-time analytics dashboards and automated data pipelines. Streamlined alert triage and reporting workflows through custom data integrations.",
            date: "2024",
            tech: ["MERN Stack", "Data Pipelines", "Analytics"],
            link: "https://securgeek.vercel.app/",
        },
        {
            title: "Trylo Virtual Try-On",
            description:
                "AI-powered virtual try-on solution integrating MV-VTON models with optimized inference APIs. Built a Dockerized backend on AWS to handle image processing at scale.",
            date: "2024",
            tech: ["React", "AWS", "Docker", "ML Inference"],
            link: "https://tryon.mayanksinghal.tech",
        },
    ];

    return (
        <div className="relative pb-16">
            <Navigation />
            <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
                <div className="max-w-2xl mx-auto lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                        Work
                    </h2>
                    <p className="mt-4 text-zinc-400">
                        A selection of projects focusing on software engineering, automation, and AI solutions.
                    </p>
                </div>
                <div className="w-full h-px bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
                    {/* Featured / Large Card for the most recent role */}
                    <Card>
                        <Link href={projects[0].link}>
                            <article className="relative w-full h-full p-4 md:p-8">
                                <div className="flex items-center justify-between gap-2">
                                    <div className="text-xs text-zinc-100">
                                        {projects[0].date}
                                    </div>
                                    <span className="flex items-center gap-1 text-xs text-zinc-500">
                                        <span>Go to Website</span> <MoveRight className="w-4 h-4" />
                                    </span>
                                </div>

                                <h2 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">
                                    {projects[0].title}
                                </h2>
                                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                    {projects[0].description}
                                </p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {projects[0].tech.map(t => (
                                        <span key={t} className="text-xs font-medium text-zinc-300 px-2 py-1 bg-zinc-800/50 rounded-full border border-zinc-700">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </article>
                        </Link>
                    </Card>

                    <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
                        {projects.slice(1).map((project) => (
                            <Card key={project.title}>
                                <Link href={project.link}>
                                    <article className="p-4 md:p-8">
                                        <div className="flex items-center justify-between gap-2">
                                            <span className="text-xs text-zinc-100">
                                                {project.date}
                                            </span>
                                            <span className="flex items-center gap-1 text-xs text-zinc-500">
                                                <span>View Project</span> <MoveRight className="w-4 h-4" />
                                            </span>
                                        </div>
                                        <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
                                            {project.title}
                                        </h2>
                                        <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
                                            {project.description}
                                        </p>
                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {project.tech.map(t => (
                                                <span key={t} className="text-xs font-medium text-zinc-300 px-2 py-1 bg-zinc-800/50 rounded-full border border-zinc-700">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </article>
                                </Link>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
