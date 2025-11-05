"use client";

import React, { useState, useMemo } from "react";
import Container from "@/components/common/Container";
import ProjectCard from "@/components/sections/Projects/ProjectCard";
import { projectsData } from "@/data/Projects";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export interface ProjectsPageProps {
  containerClassName?: string;
  gridClassName?: string;
  titleClassName?: string;
  limit?: number;
  showFilter?: boolean;
}

export default function ProjectsList(props: Partial<ProjectsPageProps>) {
  const {
    containerClassName = "mx-auto px-6 lg:px-12 max-w-3xl mt-20 py-4",
    gridClassName = "grid md:grid-cols-2 lg:grid-cols-2 gap-8 py-12",
    titleClassName = "text-4xl font-bold tracking-tight lg:text-5xl text-center",
    limit,
    showFilter = true,
  } = props;
  const [filter, setFilter] = useState("All");

  const types = useMemo(() => {
    const unique = Array.from(new Set(projectsData.map((p) => p.type || "Other")));
    return ["All", ...unique];
  }, []);

  const displayedProjects = (limit ? projectsData.slice(0, limit) : projectsData).filter((project) => filter === "All" || (project.type || "") === filter);

  return (
    <Container className={containerClassName}>
      {/* Only show heading when NOT limited (full Projects page) */}
      {!limit && (
        <>
          <div className="text-center space-y-4 mt-6">
            <h1 className={titleClassName}>Projects</h1>
          </div>
          <Separator className="my-8" />
        </>
      )}

      {/* Filters (also hide on home if you want) */}
      {showFilter && !limit && (
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {types.map((t) => (
            <Button key={t} variant={t === filter ? "default" : "outline"} onClick={() => setFilter(t)}>
              {t}
            </Button>
          ))}
        </div>
      )}

      {/* Projects Grid */}
      <div className={gridClassName}>
        {displayedProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </Container>
  );
}
