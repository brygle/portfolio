"use client";

import Section from "../Layout/Section";
import TitleText from "../Text/TitleText";
import Text from "../Text/Text";
import { useTranslation } from "react-i18next";

export default function Experience() {

  const { t } = useTranslation();
  
  return (
    <Section id='experience'>
        <div className="w-full flex flex-col justify-center items-center gap-[16px] md:gap-10">
            <TitleText className="text-center">{t('experience.title')}</TitleText>
            <div className="flex flex-col w-full justify-center items-center md:gap-10">
                <div className="flex flex-col gap-[4px] max-w-[600px]">
                    <Text className="font-bold">Banco Industrial S. A.</Text>
                    <Text>{t('experience.period-bi')}</Text>
                    <Text>{t('experience.frontend')}</Text>
                    <Text>{t('experience.experience-bi')}</Text>
                </div>
                <div className="flex flex-col gap-[4px] max-w-[600px]">
                    <Text className="font-bold">Cian Coders</Text>
                    <Text>{t('experience.period-cian')}</Text>
                    <Text>{t('experience.frontend')}</Text>
                    <Text>{t('experience.experience-cian')}</Text>
                </div>
                <div className="flex flex-col gap-[4px] max-w-[600px]">
                    <Text className="font-bold">CONAP - Consejo Nacional de Áreas Protegidas</Text>
                    <Text>{t('experience.period-conap')}</Text>
                    <Text>{t('experience.fullstack')}</Text>
                    <Text>{t('experience.experience-conap')}</Text>
                </div>
                <div className="flex flex-col gap-[4px] max-w-[600px]">
                    <Text className="font-bold">FIUSAC - Facultad de Ingeniería</Text>
                    <Text>{t('experience.period-usac')}</Text>
                    <Text>{t('experience.aux')}</Text>
                    <Text>{t('experience.experience-usac')}</Text>
                </div>
            </div>
        </div>
    </Section>
  );
}
