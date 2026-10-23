# Local video assets

Replace the small placeholder MP4 files with your supplied OAD videos. Keep each filename/path unchanged to avoid changing application code. Paths are configured in `app/workouts.ts`.

Required shared videos:
- `warm-up.mp4` — warm-up
- `flow-down.mp4` — flow-down

Main workout videos are referenced from `app/workouts.ts`, including:
- `beginner-speed.mp4`
- `beginner-agility.mp4`
- `beginner-burst.mp4`
- `beginner-blast.mp4`
- `momentum.mp4`, `accelerate.mp4`, `slimmer.mp4`, `lean-out.mp4`, `dynamic.mp4`, `torch.mp4`, `tone.mp4`, `tighten.mp4`, `strengthen.mp4`, `invigorate.mp4`

If an MP4 is missing or invalid, the player displays an asset error and lets you switch to explicitly labelled demo playback. Real playback is only completed from the native video's `ended` event after a playback-history guard; seeking to the end is not enough.
