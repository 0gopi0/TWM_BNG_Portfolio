import {
  LuAtSign,
  LuCamera,
  LuFacebook,
  LuHeart,
  LuImage,
  LuInstagram,
  LuLinkedin,
  LuMessageCircle,
  LuMic,
  LuPenTool,
  LuPlay,
  LuScissors,
  LuTrendingUp,
  LuTwitter,
  LuWandSparkles,
  LuYoutube,
} from 'react-icons/lu'
import { FLOATERS } from '../../data/marketing'

const ICONS = {
  instagram: LuInstagram,
  youtube: LuYoutube,
  facebook: LuFacebook,
  twitter: LuTwitter,
  linkedin: LuLinkedin,
  at: LuAtSign,
  camera: LuCamera,
  pen: LuPenTool,
  play: LuPlay,
  heart: LuHeart,
  mic: LuMic,
  image: LuImage,
  comment: LuMessageCircle,
  scissors: LuScissors,
  trend: LuTrendingUp,
  wand: LuWandSparkles,
}

export default function Floaters() {
  return (
    <div className="dm-floaters" aria-hidden="true">
      {FLOATERS.map((item, i) => {
        const Icon = ICONS[item.icon]

        return (
          <span
            key={`${item.side}-${item.icon}`}
            className={`dm-floater ${i % 2 === 0 ? 'is-hot' : 'is-white'}`}
            style={{
              top: item.top,
              [item.side]: `calc(50% - 560px - ${item.offset}px)`,
              width: item.size,
              height: item.size,
              '--fd': `${item.delay}ms`,
            }}
          >
            <Icon />
          </span>
        )
      })}
    </div>
  )
}
