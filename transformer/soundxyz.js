const version = "0.1.0";

export default async function transform(nft) {
  const datum = nft[0];
  return {
    version,
    title: datum.name,
    duration: "PT0M", // TODO: Duration needs to be inferred from the audio file
    artist: {
      version,
      name: datum.artist_name,
    },
    platform: {
      version,
      name: "Sound",
      uri: "https://sound.xyz",
    },
    erc721: {
      version,
      // TODO
      address: nft[1],
      tokenId: nft[2],
      tokenURI: "https://example.com/metadata.json",
      metadata: {
        ...datum,
      },
    },
    manifestations: [
      {
        version,
        uri: datum.audio_url,
        // TODO
        mimetype: "audio/mp3",
      },
      {
        version,
        uri: datum.image,
        // TODO
        mimetype: "image/jpeg",
      },
      {
        version,
        uri: datum.animation_url,
        // TODO
        mimetype: "image/gif",
      },
    ],
  };
}