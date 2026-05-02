import "./index.scss";
import { useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";
import {
  CharacterBuilderFormSchema,
  CharacterBuilderFormData,
} from "../../schemas/characterBuilder.schema";
import CharacterBuilderForm from "../../components/Planner/CharacterBuilderForm";
import CharacterSheetPreview from "../../components/Planner/CharacterSheetPreview";

/**
 * BuildPlanner: Two-column responsive layout
 * - Left: Form for building character
 * - Right: Live preview of character sheet
 * - Mobile: Stacks vertically (form above, preview below)
 */
export default function BuildPlanner() {
  // Form state using react-hook-form + valibot
  const {
    register,
    watch,
    formState: { errors },
  } = useForm<CharacterBuilderFormData>({
    resolver: valibotResolver(CharacterBuilderFormSchema),
    defaultValues: {
      heroName: "",
      level: 1,
    },
    mode: "onChange", // Validate as user types
  });

  // Watch all form values for live preview
  const formValues = watch();

  return (
    <div className="build-planner-page">
      <div className="build-planner-content">
        {/* Header */}
        <h1>Character Builder</h1>
        <p>
          Create your character step by step. Watch your character sheet update
          in real-time.
        </p>

        {/* Two-column layout: Form (left) | Preview (right) */}
        <div className="build-planner-layout">
          {/* Left Column: Form */}
          <div className="build-planner-form-section">
            <div className="build-planner-form-section-tabs">
              <button className="link-button">Background</button>

              <button className="link-button">Class</button>

              <button className="link-button">Experiences</button>

              <button className="link-button">Equipment</button>
            </div>

            <CharacterBuilderForm
              register={register}
              errors={errors}
              watch={watch}
            />
          </div>

          {/* Right Column: Character Sheet Preview */}
          <div className="build-planner-preview-section">
            <CharacterSheetPreview characterData={formValues} />
          </div>
        </div>
      </div>
    </div>
  );
}
