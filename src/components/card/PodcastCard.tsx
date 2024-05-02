import {
  CardContainer,
  CardDescription,
  CardImage,
  CardSubTitle,
  CardTitle,
  PodcastDescriptioner,
} from "../../ui/PodcastCard";
import { Link } from "react-router-dom";

type PodcastCardProps = {
  name: string;
  artist: string;
  image: string;
  id?: string;
  description?: string;
};

export function PodcastCard({
  name,
  image,
  artist,
  id,
  description,
}: Readonly<PodcastCardProps>) {
  return (
    <Link to={`/podcast/${id}`}>
      <CardContainer>
        <CardImage src={image} alt={name} />
        <CardDescription>
          <CardTitle>{name}</CardTitle>
          <CardSubTitle>{artist}</CardSubTitle>
          {description && (
            <PodcastDescriptioner>{description}</PodcastDescriptioner>
          )}
        </CardDescription>
      </CardContainer>
    </Link>
  );
}
