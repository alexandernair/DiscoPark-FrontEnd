# Disco Park 🌲

Have you ever wanted to explore perfect top National Park, 
but not waste hours actually visiting them? Well say 👋 to Disco Park. 
A website that let's you choose prefrences to match you with your top 
National Park. 

## Tech Stack

**Client:** React, TypeScript, Material UI.

**Server:** Node JS, MongoDB

## API Reference

#### Get all items

```http
  GET https://developer.nps.gov/api/v1/parks?&api_key=${api_key}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

## Demo

https://discopark.netlify.app
