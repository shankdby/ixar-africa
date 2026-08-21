# Stock photography — drop files here

Every filename below is already wired into the site. Save a photo with the exact
name and run `npm run build`; the image appears with no code change. Until then
the slot renders as a navy panel, so nothing looks broken while the library fills up.

## Licence

Use **Unsplash**, **Pexels** or **Pixabay**. All three licences allow commercial use
with no attribution and no fee — nothing to track, nothing to credit.

Avoid Wikimedia Commons unless you check each file: much of it is CC-BY-SA, which
requires credit and share-alike terms.

## Format

WebP preferred, JPEG fine. Aim for the sizes below; larger is fine, the build does
not resize but oversized files cost load time. Run `npm run images` (or just
`npm run build`) after adding files — the dimension manifest regenerates itself.

## What each slot needs

### Heroes — wide, atmospheric, no readable branding

| Filename | Size | Must show |
|---|---|---|
| `stk-hero-services.webp` | 1920×1080 | Industrial pipework or process plant, wide shot |
| `stk-hero-industries.webp` | 1920×1080 | Processing facility at dusk, wide shot |

### Services — one per inspection discipline

| Filename | Size | Must show | Search terms |
|---|---|---|---|
| `stk-radiography.webp` | 1600×900 | Industrial radiography — X-ray equipment on pipe, or film viewing | "industrial radiography", "x-ray weld inspection" |
| `stk-ultrasonic.webp` | 1600×900 | Ultrasonic probe or phased array scanner on a weld | "ultrasonic testing weld", "phased array probe" |
| `stk-pipeline.webp` | 1600×900 | Cross-country pipeline under construction | "pipeline construction", "pipeline right of way" |
| `stk-tube-exchanger.webp` | 1600×900 | Heat exchanger tube bundle, withdrawn or in place | "heat exchanger tube bundle", "shell and tube exchanger" |
| `stk-tank-farm.webp` | 1600×900 | Bulk storage tanks / tank farm | "oil storage tank farm", "fuel terminal tanks" |
| `stk-diver.webp` | 1600×900 | Commercial diver, surface-supplied helmet — not scuba | "commercial diver", "surface supplied diving" |
| `stk-laboratory.webp` | 1600×900 | Materials testing lab — tensile machine, microscope, specimens | "materials testing laboratory", "metallurgy lab" |

### Industries — one per sector

| Filename | Size | Must show | Search terms |
|---|---|---|---|
| `stk-oil-gas.webp` | 1600×900 | Refinery or gas processing facility | "oil refinery", "gas processing plant" |
| `stk-power.webp` | 1600×900 | Turbine hall, boiler house or geothermal plant | "power plant turbine hall", "geothermal power station" |
| `stk-mining.webp` | 1600×900 | Mine site — heavy equipment, conveyors, structural steel | "open pit mine equipment", "mining conveyor" |
| `stk-railway.webp` | 1600×900 | Welded rail track close-up | "railway track rail", "welded rail joint" |
| `stk-marine-port.webp` | 1600×900 | Port jetty, berth or gantry cranes | "port gantry crane", "harbour jetty" |
| `stk-process-food.webp` | 1600×900 | Stainless steel process or fermentation tanks | "brewery tanks stainless", "food processing plant" |
| `stk-cement.webp` | 1600×900 | Cement plant, rotary kiln or cyclone tower | "cement plant kiln", "cement factory" |
| `stk-sugar.webp` | 1600×900 | Sugar mill or evaporator hall | "sugar mill factory", "sugar processing plant" |

### Training

| Filename | Size | Must show | Search terms |
|---|---|---|---|
| `stk-training.webp` | 1920×1080 | Technical training — instructor, instruments, adult learners | "technical training industrial", "engineering classroom" |
| `stk-training-lab.webp` | 1600×1200 | Practical lab bench with test specimens and instruments | "testing laboratory bench", "calibration equipment" |

## Choosing well

Two things make the difference between stock that reads as premium and stock that
reads as filler:

**Avoid readable branding and faces where you can.** Tanks, pipe, plant, rail and
equipment carry no risk. Photographs centred on a person in branded PPE invite the
question of who they are — and that is exactly where the previous AI images failed.

**Prefer plant over people.** The site already has genuine IXAR crew photography on
Projects, Offices and Careers. Those are the human images, and they are real. Stock
should fill in the equipment and facilities around them, not compete with them.
