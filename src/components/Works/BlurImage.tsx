import Image from "next/image"

import type { DynamicImage } from "types/image"

export const BlurImage = ({ imageProps, alt }: DynamicImage) => {
  return <Image {...imageProps} alt={alt} placeholder="blur" />
}
