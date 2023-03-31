// DOCUMENTED 
import { SpellRunner } from '../../src/lib/spellManager';
import { MagickSpellInput, SpellInterface } from '../../src/lib/types';

/**
 * Runs a test spell and returns the outputs.
 * @param spell - The spell to be run.
 * @param inputs - The inputs for the spell.
 * @returns A promise that resolves to the spell's outputs.
 */
export const runTestSpell = async (
  spell: SpellInterface,
  inputs: MagickSpellInput
): Promise<unknown> => { // Update return type to unknown to avoid using 'any'

  // Create a new spell runner, which caches and runs the spells
  const spellRunner = new SpellRunner();

  // Load the spell into the spell runner
  await spellRunner.loadSpell(spell);

  // Get the outputs from running the spell
  const outputs = await spellRunner.runComponent({ inputs });

  // Return the outputs
  return outputs;
};