import { UIMessage } from 'ai'
import { Bot } from 'lucide-react'

interface ChatMessageProps {
  message: UIMessage
}

export const ChatMessage = ({ message }: ChatMessageProps) => {
  const isUser = message.role === 'user'
  const isSystem = message.role === 'system'

  const content = message.parts
    .filter((part) => part.type === 'text')
    .map((part) => part.text)
    .join('')

  if (isSystem) {
    return (
      <div className="flex w-full flex-col gap-3 px-5 pt-6 pb-0">
        <div className="border-border flex w-full flex-col gap-2.5 rounded-xl border p-3">
          <div className="flex w-full items-center justify-center gap-2.5">
            <p className="text-muted-foreground grow basis-0 text-center text-sm leading-[1.4] font-normal">
              {content}
            </p>
          </div>
        </div>
      </div>
    )
  }

  if (isUser) {
    return (
      <div className="flex w-full flex-col items-end gap-3 pt-6 pr-5 pb-0 pl-10">
        <div className="bg-secondary flex h-10 items-center gap-2.5 rounded-full px-4 py-3">
          <p className="text-foreground text-sm leading-[1.4] font-normal whitespace-pre">
            {content}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex w-full flex-col gap-3 pt-6 pr-14 pb-0 pl-3">
      <div className="flex w-full gap-2">
        <div className="border-border flex size-8 shrink-0 items-center justify-center rounded-full border bg-[rgba(48,92,58,0.12)]">
          <Bot className="text-primary size-3.5" />
        </div>
        <p className="text-foreground grow basis-0 text-sm leading-[1.4] font-normal">
          {content}
        </p>
      </div>
    </div>
  )
}
