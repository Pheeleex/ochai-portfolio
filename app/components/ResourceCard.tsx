import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from 'next/link'
import Image from 'next/image'


interface props{
  id: string,
  title: string,
  image: string
  url: string
  description: string
}


const ResourceCard = ({id, title, image, url, description}: props) => {
  return (
    <Card className="w-full max-w-fit border-0  sm:max-w-[356px]">
      <Card className="w-full max-w-fit border-0 !bg-transparent sm:max-w-[356px]">
      <Link href={url} target="_blank">
        <CardHeader className="flex-center flex-col gap-2.5 !p-0">
          <div className="h-fit w-full p-2">
            <Image 
              src={image}
              className="h-full rounded-md object-cover"
              width={384}
              height={440}
              alt={title}
            />
          </div>
          <CardTitle className="text-white paragraph-semibold line-clamp-1 w-full text-left">{title}</CardTitle>
          <CardDescription className="text-white">{description}</CardDescription>
        </CardHeader>
      </Link>
      <CardContent className="flex-between mt-4 p-0">     
        <Link href={url} target="_blank" className="flex-center text-gradient_purple-blue body-semibold gap-1.5">
         Check it out
          <Image src="/arrow-blue.svg" width={13} height={10} alt="arrow" />
        </Link>
      </CardContent>
    </Card>
    </Card>
  )
}

export default ResourceCard