import styled from "styled-components";

const IFrameSpotify = () => {
  return (
    <ActicleIFrame
      dangerouslySetInnerHTML={{
        __html:
          '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/show/3iOWz7ZfFdVdZNgXWoO8ls?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
      }}
    />
  );
};

const ActicleIFrame = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { IFrameSpotify };
