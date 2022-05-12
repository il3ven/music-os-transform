const version = "0.1.0";

export default async function transform(nft) {
  const datum = nft[0];
  return {
    version,
    title: datum.body.title,
    duration: `PT${Math.floor(datum.body.duration/60)}M${(datum.body.duration%60).toFixed(0)}S`,
    artist: {
      version,
      name: datum.body.artist,
    },
    platform: {
      version,
      name: "Catalog",
      uri: "https://beta.catalog.works",
    },
    erc721: {
      version,
      // TODO
      address: nft[1],
      tokenId: nft[2],
      tokenURI: "https://example.com/metadata.json",
      metadata: {
        ...datum,
        name: datum.body.title,
        description: datum.body.notes || "No description is available.",
        image: datum.body.artwork.info.uri,
      },
    },
    manifestations: [
      {
        version,
        // TODO: Zora's file URL can be retrieved when calling tokenURI
        uri: "https://example.com/file",
        mimetype: datum.body.mimeType,
      },
      {
        version,
        uri: datum.body.artwork.info.uri,
        mimetype: datum.body.artwork.info.mimeType,
      },
    ],
  };
}