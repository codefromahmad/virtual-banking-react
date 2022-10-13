import React from "react";
import { cards } from "./Data";
import {
  ServiceContainer,
  ServiceWrapper,
  ServiceH1,
  ServiceCards,
  ServiceCard,
  Icon,
  Heading,
  Text,
} from "./ServiceSectionElements";

const ServiceSection = () => {
  return (
    <ServiceContainer id="services">
      <ServiceWrapper>
        <ServiceH1>Our Services</ServiceH1>
        <ServiceCards>
          {cards.map(({ id, icon, heading, description }) => (
            <ServiceCard key={id}>
              <Icon src={icon} />
              <Heading>{heading}</Heading>
              <Text>{description}</Text>
            </ServiceCard>
          ))}
        </ServiceCards>
      </ServiceWrapper>
    </ServiceContainer>
  );
};

export default ServiceSection;
