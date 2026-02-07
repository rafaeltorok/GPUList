import { useParams, Link } from "react-router-dom";

export default function Gpu({ gpus, findCardById }) {
	const { id } = useParams();
	const gpu = findCardById(gpus, id);
	const API_BASE = import.meta.env.VITE_API_BASE;

  return (
    <div>
      <h1>{gpu.model}</h1>
        <div className="image-container">
					<img className="front" src={`${API_BASE}${gpu.images.front}`} alt="Graphics Card front" />
					<img className="core" src={`${API_BASE}${gpu.images.core}`} alt="GPU Core" />
        </div>
        <h2>Graphics Processor</h2>
        <table>
					<tbody>
						<tr>
							<th>GPU Name</th>
							<th>GPU Variant</th>
							<th>Architecture</th>
							<th>Foundry</th>
							<th>Process Size</th>
							<th>Transistors</th>
							<th>Density</th>
							<th>Die Size</th>
						</tr>
						<tr>
							<td>{gpu.graphicsProcessor.gpuName}</td>
							<td>{gpu.graphicsProcessor.gpuVariant}</td>
							<td>{gpu.graphicsProcessor.architecture}</td>
							<td>{gpu.graphicsProcessor.foundry}</td>
							<td>{gpu.graphicsProcessor.processSize}</td>
							<td>{gpu.graphicsProcessor.transistors}</td>
							<td>{gpu.graphicsProcessor.density}</td>
							<td>{gpu.graphicsProcessor.dieSize}</td>
						</tr>
					</tbody>
        </table>
        <h2>Graphics Card</h2>
        <table>
					<tbody>
						<tr>
							<th>Release date</th>
							<th>Availability</th>
							<th>Generation</th>
							<th>Launch price</th>
							<th>Bus Interface</th>
						</tr>
						<tr>
							<td>{gpu.graphicsCard.releaseDate}</td>
							<td>{gpu.graphicsCard.availability}</td>
							<td>{gpu.graphicsCard.generation}</td>
							<td>{gpu.graphicsCard.launchPrice}</td>
							<td>{gpu.graphicsCard.busInterface}</td>
						</tr>
					</tbody>
        </table>
        <h2>Clock Speeds</h2>
        <table>
					<tbody>
						<tr>
							<th>Base Clock</th>
							<th>Boost Clock</th>
							<th>Memory Clock</th>
						</tr>
						<tr>
							<td>{gpu.clockSpeeds.baseClock}</td>
							<td>{gpu.clockSpeeds.boostClock}</td>
							<td>{gpu.clockSpeeds.memoryClock}<br></br>{gpu.clockSpeeds.memoryClockEffective}</td>
						</tr>
					</tbody>
        </table>
        <h2>Render Config</h2>
        <table>
					<tbody>
						<tr>
							<th>Cores</th>
							<th>TMUs</th>
							<th>ROPs</th>
							<th>
								{gpu.model.includes('Radeon') && "Compute Units"}
								{gpu.model.includes('GeForce') && "SM Count"}
								{gpu.model.includes('Arc') && "Execution Units"}
							</th>
							<th>
								{gpu.model.includes('Radeon') && "Matrix Cores"}
								{gpu.model.includes('GeForce') && "Tensor Cores"}
								{gpu.model.includes('Arc') && "XMX Cores"}
							</th>
							<th>RT Cores</th>
							<th>L1 Cache</th>
							<th>L2 Cache</th>
						</tr>
						<tr>
							<td>{gpu.renderConfig.cores}</td>
							<td>{gpu.renderConfig.tmus}</td>
							<td>{gpu.renderConfig.rops}</td>
							<td>
								{gpu.model.includes('Radeon') && gpu.renderConfig.computeUnits}
								{gpu.model.includes('GeForce') && gpu.renderConfig.smCount}
								{gpu.model.includes('Arc') && gpu.renderConfig.executionUnits}
							</td>
							<td>
								{gpu.model.includes('Radeon') && gpu.renderConfig.matrixCores}
								{gpu.model.includes('GeForce') && gpu.renderConfig.tensorCores}
								{gpu.model.includes('Arc') && gpu.renderConfig.xmxCores}
							</td>
							<td>{gpu.renderConfig.rtCores}</td>
							<td>{gpu.renderConfig.l1Cache}</td>
							<td>{gpu.renderConfig.l2Cache}</td>
						</tr>
					</tbody>
        </table>
        <h2>Memory</h2>
        <table>
					<tbody>
						<tr>
							<th>Memory Size</th>
							<th>Memory Type</th>
							<th>Memory Bus</th>
							<th>Bandwidth</th>
						</tr>
						<tr>
							<td>{gpu.memory.memorySize}</td>
							<td>{gpu.memory.memoryType}</td>
							<td>{gpu.memory.memoryBus}</td>
							<td>{gpu.memory.bandwidth}</td>
						</tr>
					</tbody>
        </table>
        <h2>Theoretical Performance</h2>
        <table>
					<tbody>
						<tr>
							<th>Pixel Rate</th>
							<th>Texture Rate</th>
							<th>FP16 (half)</th>
							<th>FP32 (float)</th>
							<th>FP64 (double)</th>
						</tr>
						<tr>
							<td>{gpu.theoreticalPerformance.pixelRate}</td>
							<td>{gpu.theoreticalPerformance.textureRate}</td>
							<td>{gpu.theoreticalPerformance.fp16Half}</td>
							<td>{gpu.theoreticalPerformance.fp32Float}</td>
							<td>{gpu.theoreticalPerformance.fp64Double}</td>
						</tr>
					</tbody>
        </table>
        <h2>Board Design</h2>
        <table>
					<tbody>
						<tr>
							<th>Slot Width</th>
							<th>Length</th>
							<th>Width</th>
							<th>Height</th>
							<th>TDP</th>
							<th>Suggested PSU</th>
							<th>Outputs</th>
							<th>Power Connectors</th>
						</tr>
						<tr>
							<td>{gpu.boardDesign.slotWidth}</td>
							<td>{gpu.boardDesign.length}</td>
							<td>{gpu.boardDesign.width}</td>
							<td>{gpu.boardDesign.height}</td>
							<td>{gpu.boardDesign.tdp}</td>
							<td>{gpu.boardDesign.suggestedPsu}</td>
							<td>
									{gpu.boardDesign.outputs.map((output, i) => (
										<div key={i}>{output}</div>
									))}
							</td>
							<td>{gpu.boardDesign.powerConnectors}</td>
						</tr>
					</tbody>
        </table>
        <h2>Graphics Features</h2>
        <table>
					<tbody>
						<tr>
							<th>DirectX</th>
							<th>OpenGL</th>
							<th>OpenCL</th>
							<th>Vulkan</th>
							<th>CUDA</th>
							<th>Shader Model</th>
						</tr>
						<tr>
							<td>{gpu.graphicsFeatures.directX}</td>
							<td>{gpu.graphicsFeatures.openGl}</td>
							<td>{gpu.graphicsFeatures.openCl}</td>
							<td>{gpu.graphicsFeatures.vulkan}</td>
							<td>{gpu.graphicsFeatures.cuda}</td>
							<td>{gpu.graphicsFeatures.shaderModel}</td>
						</tr>
					</tbody>
        </table>
        <Link to={'/'} className="button">
					Return
				</Link>
    </div>
  );
}