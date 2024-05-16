import { Affix, Button, rem, Transition } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";

export function ScrollToTop() {
  const [scroll, scrollTo] = useWindowScroll();
  return (
    <Affix position={{ bottom: 20, right: 20 }}>
      <Transition transition="slide-up" mounted={scroll.y > 0}>
        {(transitionStyles) => (
          <Button
            color={"var(--mantine-color-custom-purple-5)"}
            style={transitionStyles}
            onClick={() => scrollTo({ y: 0 })}
          >
            △
          </Button>
        )}
      </Transition>
    </Affix>
  );
}
