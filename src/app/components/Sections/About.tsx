"use client";

import Section from "../Layout/Section";
import HeaderText from "../Text/HeaderText";
import TitleText from "../Text/TitleText";
import Text from "../Text/Text";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { assetPath } from "@/utils/basePath";

export default function About() {

    const { t } = useTranslation();

    return (
        <Section id='about'>
            <div className="w-full flex flex-col justify-center items-center gap-[16px] md:gap-[24px]">
                <HeaderText className="text-center">{t('about.introduce')}</HeaderText>
                <TitleText className="text-center">{t('about.welcome')}</TitleText>
                <div className="flex flex-col w-full gap-[16px] justify-center items-center md:gap-[64px] md:flex-row">
                    <Image 
                        src={assetPath("/bryan.jfif")}
                        alt="Me"
                        width={250}
                        height={250}
                        className="w-[250px] h-[250px] rounded-full"
                        unoptimized 
                    />
                    <div className="flex flex-col gap-[4px] md:items-start">
                        <Text className="text-center">{t('about.name')}</Text>
                        <Text className="text-center">{t('about.city')}</Text>
                        <Text className="text-center">{t('about.ocupation')}</Text>
                    </div>
                </div>
            </div>
        </Section>
    );
}
