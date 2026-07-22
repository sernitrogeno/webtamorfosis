import { BeforeAfterComparison } from "@/components/BeforeAfterComparison";
import { MockupFrame, caseMockups } from "@/components/mockups/SiteMockups";

/**
 * Comparador INTERACTIVO de un caso: usa el deslizador antes/después con las
 * maquetas reales del sector. Ambas capas comparten altura fija (MockupFrame),
 * de modo que el deslizador encaja perfectamente.
 */
export function CaseSlider({ slug }: { slug: string }) {
  const pair = caseMockups[slug];
  if (!pair) return null;
  const { Old, New, url } = pair;

  return (
    <BeforeAfterComparison
      labelPosition="top"
      before={
        <MockupFrame tone="old" url={url} size="md" bare>
          <Old />
        </MockupFrame>
      }
      after={
        <MockupFrame tone="modern" url={url} size="md" bare>
          <New />
        </MockupFrame>
      }
    />
  );
}
