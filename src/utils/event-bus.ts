import { SafeAny } from "@models/data.model.ts";

type HandlerFn = (_?: SafeAny) => SafeAny;

export const EventBus = () => {
  const allHandlers = new Map<string, HandlerFn[]>();

  return {
    on: (type: string, handler: HandlerFn) => {
      let handlers = allHandlers.get(type);
      if (!handlers) {
        handlers = [handler];
      } else {
        handlers.push(handler);
      }
      allHandlers.set(type, handlers);
    },
    off: (type: string, handler: HandlerFn) => {
      const handlers = allHandlers.get(type);
      handlers && handlers.splice(handlers.indexOf(handler) >>> 0, 1);
    },
    emit: (type: string, event: SafeAny) => {
      const handlers = allHandlers.get(type);
      handlers && handlers.slice().forEach((handler) => handler(event));
    },
  };
}

// Usage:
// const eventService = EventBus();
// useEffect(() => {
//   eventService.on("customEvent", (e) => console.log(e));
//   setTimeout(() => {
//     eventService.emit("customEvent", {visible: true});
//   }, 3000);
// }, []);
