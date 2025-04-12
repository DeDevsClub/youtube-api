const { fetchTranscript } = require('youtube-transcript');

module.exports = async function handler(req, res) {
  const { videoUrl } = req.query;

  if (!videoUrl) {
    return res.status(400).json({ error: 'Missing videoUrl parameter' });
  }

  try {
    const urlObj = new URL(videoUrl);
    const videoId =
      urlObj.searchParams.get('v') ||
      (urlObj.hostname === 'youtu.be' ? urlObj.pathname.slice(1) : null);

    if (!videoId) {
      return res.status(400).json({ error: 'Invalid YouTube URL' });
    }

    const transcript = await fetchTranscript(videoId);
    return res.status(200).json({ videoId, transcript });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};