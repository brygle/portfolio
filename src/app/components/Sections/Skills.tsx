"use client";

import Section from "../Layout/Section";
import Image from "next/image";
import { assetPath } from "@/utils/basePath";
import TitleText from "../Text/TitleText";
import Text from "../Text/Text";
import { useTranslation } from "react-i18next";

export default function Skills() {
  const { t } = useTranslation();
  const skillsThree = [
    {
      label: "HTML5",
      iconName: "html5.png"
    },
    {
      label: "Javascript",
      iconName: "javascript.png"
    },
    {
      label: "Typescript",
      iconName: "typescript.png"
    },
    {
      label: "CSS3",
      iconName: "css.png"
    },
    {
      label: "Sass",
      iconName: "sass.png"
    },
    {
      label: "Tailwindcss",
      iconName: "tailwind-css.png"
    }
  ];
  const skillsTwo = [
    {
      label: "Angular",
      iconName: "angular.png"
    },
    {
      label: "React",
      iconName: "react.png"
    },
    {
      label: "Java",
      iconName: "java.png"
    },
    {
      label: "Spring boot",
      iconName: "spring-boot.png"
    },
    {
      label: "Git",
      iconName: "git.png"
    },
    {
      label: "AWS",
      iconName: "aws.png"
    }
  ];
  return (
    <Section id='skills'>
        <div className="w-full flex flex-col justify-center items-center gap-24 py-28">
          <TitleText className="text-center">{t('skills.title')}</TitleText>
          <div className="flex flex-col gap-24 max-w-[600px]"> 
            <div className="grid grid-cols-3 gap-24">
              {skillsThree.map((skill) => (
                <div key={skill.label} className="flex flex-col gap-4 items-center justify-center">
                  <Image
                    src={assetPath("/icons/" + skill.iconName)}
                    alt="CSS"
                    width={48}
                    height={48}
                  />
                  <Text>{skill.label}</Text>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-24">
              {skillsTwo.map((skill) => (
                <div key={skill.label} className="flex flex-col gap-4 items-center justify-center">
                  <Image
                    src={assetPath("/icons/" + skill.iconName)}
                    alt="CSS"
                    width={48}
                    height={48}
                  />
                  <Text>{skill.label}</Text>
                </div>
              ))}
            </div>
          </div>
        </div>
    </Section>
  );
}
