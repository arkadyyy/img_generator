import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});


export async function generateImage(prompt,options){
    const input = {
        prompt,
        go_fast: true,
        guidance: 3.5,
        megapixels: "1",
        num_outputs: 1,
        aspect_ratio: options.aspect_ration || "1:1",
        output_format: options.format || "png",
        output_quality: options.quality || 80,
        prompt_strength: 0.8,
        num_inference_steps: 28
      };
      
      const output = await replicate.run("black-forest-labs/flux-dev", { input });
      const outputStream = output[0]

      const imgBlob = await outputStream.blob()
      const imgBuffer = await imgBlob.arrayBuffer()
      const img = Buffer.from(imgBuffer)

      return {image : img ,format : imgBlob.type}
}