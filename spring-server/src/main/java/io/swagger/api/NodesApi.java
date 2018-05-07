/**
 * NOTE: This class is auto generated by the swagger code generator program (2.3.1).
 * https://github.com/swagger-api/swagger-codegen
 * Do not edit the class manually.
 */
package io.swagger.api;

import io.swagger.annotations.*;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import javax.validation.constraints.*;
import java.util.List;
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2018-05-07T19:40:16.138Z")

@Api(value = "nodes", description = "the nodes API")
public interface NodesApi {

    @ApiOperation(value = "Create a node", nickname = "createNodes", notes = "", tags={ "nodes", })
    @ApiResponses(value = { 
        @ApiResponse(code = 201, message = "Null response"),
        @ApiResponse(code = 200, message = "unexpected error") })
    @RequestMapping(value = "/nodes",
        method = RequestMethod.POST)
    ResponseEntity<Void> createNodes();


    @ApiOperation(value = "List all nodes", nickname = "listNodes", notes = "", tags={ "nodes", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "An paged array of nodes"),
        @ApiResponse(code = 200, message = "unexpected error") })
    @RequestMapping(value = "/nodes",
        method = RequestMethod.GET)
    ResponseEntity<Void> listNodes(@ApiParam(value = "How many items to return at one time (max 100)") @Valid @RequestParam(value = "limit", required = false) String limit);


    @ApiOperation(value = "Info for a specific node", nickname = "showNodeById", notes = "", tags={ "nodes", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "Expected response to a valid request"),
        @ApiResponse(code = 200, message = "unexpected error") })
    @RequestMapping(value = "/nodes/{nodeId}",
        method = RequestMethod.GET)
    ResponseEntity<Void> showNodeById(@ApiParam(value = "The id of the nodeto retrieve",required=true) @PathVariable("nodeId") String nodeId);

}
