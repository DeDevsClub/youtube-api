# YouTube Transcript API

A simple serverless API to fetch YouTube video transcripts, deployable on Vercel.

## Usage

### Request

GET /api/transcript?videoUrl=https://www.youtube.com/watch?v=dQw4w9WgXcQ

### Response

{
  "videoId": "dQw4w9WgXcQ",
  "transcript": [
    { "text": "Hello world", "start": 0.0, "duration": 4.2 },
    ...
  ]
}

## Deployment

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/DeDevsClub/youtube-api)

1. Click the button above
2. Import into your Vercel account
3. Done!

## Local Development

`npm install && vercel dev`
