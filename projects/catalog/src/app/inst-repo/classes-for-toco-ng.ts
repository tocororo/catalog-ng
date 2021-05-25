
import { Entity, Identifier } from "toco-lib";

/**
 * Entity for main Institution based on schema `...-v1.0.0.json`. 
 */
export class MainInstitution extends Entity
{
    /**
     * The name typically used to refer to the institute. 
     */
	name: string;
    /**
     * Organization Identifiers, different from GRID mapping. 
     */
    identifiers: Array<Identifier>;
}

/**
 * Entity for Institutional Repository based on schema `...-v1.0.0.json`. 
 */
export class InstitutionalRepository extends Entity
{
    /**
     * Name of the region. 
     */
	name: string;
    /**
     * Main Institution. 
     */
	mainInstitution: MainInstitution;
    /**
     * URL page for the institute. 
     */
	url: string;
    /**
     * URL-OAI page for the institute. 
     */
    url_oai: string;
}
